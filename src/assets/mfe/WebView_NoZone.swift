

import SwiftUI
import WebKit

// Store to hold WKWebView reference
class WebViewStore {
    var webView: WKWebView?
}

struct WebView: UIViewRepresentable {
    @Binding var messageFromMFE: String
    @Binding var messageFrom: String
    @Binding var messageText: String
    @Binding var messageDate: String
    var webViewStore: WebViewStore
    var mfeUrl: String = "https://kumaruidivloper.github.io/Test-Host-App/src/assets/mfe/main_NoZone.js"
    
    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.userContentController.add(context.coordinator, name: "mfeToHost")
        
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        
        let webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = context.coordinator
        
        if #available(iOS 16.4, *) {
            webView.isInspectable = true
        }
        
        webViewStore.webView = webView

        let html = """
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 10px; font-family: system-ui; }
            #status, #mfe { padding: 10px; background: #e3f2fd; margin-bottom: 10px; border-radius: 4px; }
            #mfe { margin-top: 10px; }
            #mfe-container {
                background: linear-gradient(135deg, #e3f2fd, #90caf9);
                padding: 20px;
                border-radius: 8px;
                min-height: 20px;
            }
          </style>
        </head>
        <body>
          <div id="status">Loading MFE...</div>
          <!--container for load MFE TAG -->
            <div id="mfe-container"></div>
          <!--container for load MFE TAG -->
          <div id="mfe"></div>
          <script type="module">
            console.log('📦 Starting MFE load from: \(mfeUrl)');
            
            import('\(mfeUrl)')
              .then(() => {
                console.log('✅ MFE script loaded');
                document.getElementById('status').textContent = 'MFE created successfully';
        
                // Logic for generate MFE TAG run time start
                  const mfeEl = document.createElement('mfe-widget');
                  document.getElementById('mfe-container').appendChild(mfeEl);
                  console.log('✅ MFE widget created');
                  document.getElementById('mfe').textContent = 'MFE loaded successfully';
                // Logic for generate MFE TAG run time end
        
              })
              .catch(err => {
                console.error('❌ Failed to load MFE:', err);
                document.getElementById('status').textContent = 'Error loading MFE: ' + err.message;
                document.getElementById('status').style.background = '#ffebee';
              });

            window.sendMessageToHost = function(msg) {
              console.log('📤 Sending to host:', msg);
              window.webkit.messageHandlers.mfeToHost.postMessage(msg);
            };
          </script>
        </body>
        </html>
        """

        webView.loadHTMLString(html, baseURL: URL(string: "https://kumaruidivloper.github.io/Test-Host-App/src/assets/mfe/"))
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) { }

    class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
        var parent: WebView

        init(_ parent: WebView) {
            self.parent = parent
        }

        func userContentController(_ userContentController: WKUserContentController,
                                  didReceive message: WKScriptMessage) {
            if message.name == "mfeToHost" {
                print("📥 Raw message received:", message.body)
                
                // Handle JSON string
                if let jsonString = message.body as? String {
                    print("📥 Received JSON string from MFE: \(jsonString)")
                    
                    if let data = jsonString.data(using: .utf8),
                       let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any] {
                        self.parseAndDisplayMessage(json)
                    } else {
                        // Plain string, not JSON
                        parent.messageFromMFE = jsonString
                        parent.messageFrom = ""
                        parent.messageText = ""
                        parent.messageDate = ""
                    }
                }
                // Handle Dictionary directly
                else if let dict = message.body as? [String: Any] {
                    print("📥 Received dictionary from MFE:", dict)
                    self.parseAndDisplayMessage(dict)
                }
            }
        }
        
        private func parseAndDisplayMessage(_ data: [String: Any]) {
            let from = data["from"] as? String ?? "unknown"
            let text = data["text"] as? String ?? ""
            let timestamp = data["date"] as? Double ?? 0
            
            // Convert timestamp to readable date
            let date = Date(timeIntervalSince1970: timestamp / 1000)
            let formatter = DateFormatter()
            formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
            let dateString = formatter.string(from: date)
            
            // Update individual fields
            parent.messageFrom = from
            parent.messageText = text
            parent.messageDate = dateString
            
            // Also update the combined message
            parent.messageFromMFE = """
            From: \(from)
            Message: \(text)
            Time: \(dateString)
            """
            
            print("✅ Parsed - From: \(from), Text: \(text), Date: \(dateString)")
        }
        
        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            print("✅ WebView finished loading")
        }
        
        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            print("❌ WebView failed: \(error.localizedDescription)")
        }
    }
}

       #Preview {
           ContentView()
       }
