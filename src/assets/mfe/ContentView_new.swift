import SwiftUI
import WebKit

struct ContentView: View {
    @State private var messageFromMFE = "No message yet"
    @State private var messageFrom = ""
    @State private var messageText = ""
    @State private var messageDate = ""
    @State private var webViewStore = WebViewStore()

    var body: some View {
        VStack(spacing: 20) {
            Text("iOS Host App")
                .font(.headline)

            VStack(alignment: .leading, spacing: 8) {
                Text("Message from MFE:")
                    .font(.caption)
                    .foregroundColor(.gray)
                
                if messageFrom.isEmpty {
                    Text(messageFromMFE)
                        .padding()
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .background(Color.gray.opacity(0.1))
                        .cornerRadius(8)
                } else {
                    VStack(alignment: .leading, spacing: 5) {
                        HStack {
                            Text("From:")
                                .font(.caption)
                                .foregroundColor(.gray)
                            Text(messageFrom)
                                .font(.body)
                                .bold()
                        }
                        
                        HStack {
                            Text("Message:")
                                .font(.caption)
                                .foregroundColor(.gray)
                            Text(messageText)
                                .font(.body)
                        }
                        
                        HStack {
                            Text("Time:")
                                .font(.caption)
                                .foregroundColor(.gray)
                            Text(messageDate)
                                .font(.caption)
                        }
                    }
                    .padding()
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.blue.opacity(0.1))
                    .cornerRadius(8)
                }
            }
            .padding(.horizontal)

            Button("Send Message to MFE") {
                sendMessageToMFE()
            }
            .buttonStyle(.borderedProminent)
        }
        .padding()
        
        WebView(
            messageFromMFE: $messageFromMFE,
            messageFrom: $messageFrom,
            messageText: $messageText,
            messageDate: $messageDate,
            webViewStore: webViewStore,
            mfeUrl: "http://localhost:4201/main.js"
        )
        .frame(height: 400)
    }

    func sendMessageToMFE() {
        guard let webView = webViewStore.webView else {
            print("⚠️ WebView not ready yet")
            return
        }
        
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        let dateString = formatter.string(from: Date())

        let script = """
        window.postMessage({
          from: 'host',
          text: 'Hello from iOS Host!',
          Time: '\(dateString)'
        }, '*');
        """
        
        webView.evaluateJavaScript(script) { result, error in
            if let error = error {
                print("❌ Error sending message: \(error.localizedDescription)")
            } else {
                print("✅ Message sent to MFE")
            }
        }
    }
}
