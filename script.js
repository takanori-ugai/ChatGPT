document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chat-window');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  // メッセージをチャットウィンドウに追加する関数
  function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // ユーザーの入力を処理する関数
  async function handleUserInput() {
    const userText = userInput.value.trim();
    if (userText === '') return;

    // ユーザーメッセージを表示
    appendMessage('user', userText);
    userInput.value = '';

    // ChatGPTからの応答を取得
    try {
      console.error(userText);
    const token = await chatgpt.getAccessToken();
    console.error(token);
    chatgpt.alert(token); // Example output: 'abcdef[...]'
//      const response = await chatgpt.askAndGetReply(userText);
//      appendMessage('chatgpt', response);
    } catch (error) {
      appendMessage('error', 'エラーが発生しました。もう一度お試しください。');
      console.error(error);
    }
  }

  // 送信ボタンのクリックイベント
  sendButton.addEventListener('click', handleUserInput);

  // Enterキーでメッセージを送信
  userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleUserInput();
    }
  });
});