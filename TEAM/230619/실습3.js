const userInp = document.querySelector('.userInp');
const messageInp = document.querySelector('.messageInp');
const sendBtn = document.querySelector('.sendBtn');
const chatList = document.querySelector('.chatList');
const inputContainer = document.querySelector('.inputContainer');

//폼태그에 submit 이벤트 달기

inputContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  const { userName, message } = e.target;
  chatList.innerHTML += `
    <div class='chatItem'>
        <p class='user'>${userName.value}</p>
        <p class='message'>${message.value}</p>
    </div>
  `;
});

// sendBtn.addEventListener('click', () => {
//   let list = document.createElement('div');
//   let user = document.createElement('p');
//   let message = document.createElement('p');
//   user.className = 'user';
//   list.className = 'chatItem';
//   user.textContent = userInp.value;
//   message.textContent = messageInp.value;

//   chatList.appendChild(list);
//   list.appendChild(user);
//   list.appendChild(message);
// });
