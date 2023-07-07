// function secondHomeWork() {
//   const formEl = document.querySelector('.form');

//   const onFormElSubmit = event => {
//     event.preventDefault();

//     const { delay, step, amount } = event.target.elements;

//     for (let i = 1; i <= Number(amount.value); i++) {
//       const position = i;
//       const currentDelay = Number(delay.value) + (i - 1) * Number(step.value);

//       createPromise(position, currentDelay)
//         .then(({ position, delay }) => {
//           console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(({ position, delay }) => {
//           console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         });
//     }
//   };

//   function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldResolve) {
//           resolve({ position, delay });
//         } else {
//           reject({ position, delay });
//         }
//       }, delay);
//     });
//   }

//   formEl.addEventListener('submit', onFormElSubmit);
// }

// secondHomeWork();

// function secondHomeWork() {
//   const formEl = document.querySelector('.form');

//   const onFormElSubmit = event => {
//     event.preventDefault();

//     const { delay, step, amount } = event.target.elements;

//     for (let i = 1; i <= Number(amount.value); i++) {
//       const currentDelay = Number(delay.value) + (i - 1) * Number(step.value);

//       createPromise(i, currentDelay)
//         .then(({ position, delay }) => {
//           console.log(`✅ Обещание ${position} выполнено за ${delay}мс`);
//         })
//         .catch(({ position, delay }) => {
//           console.log(`❌ Обещание ${position} отклонено за ${delay}мс`);
//         });
//     }
//   };

//   function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldResolve) {
//           resolve({ position, delay });
//         } else {
//           reject({ position, delay });
//         }
//       }, delay);
//     });
//   }

//   formEl.addEventListener('submit', onFormElSubmit);
// }

// secondHomeWork();

function secondHomeWork() {
  const formEl = document.querySelector('.form');

  const onFormElSubmit = event => {
    event.preventDefault();

    const { delay, step, amount } = event.target.elements;

    for (let i = 1; i <= Number(amount.value); i++) {
      const currentDelay = Number(delay.value) + (i - 1) * Number(step.value);

      createPromise(i, currentDelay)
        .then(({ delay }) => {
          console.log(`✅ Обещание выполнено за ${delay}мс`);
        })
        .catch(({ delay }) => {
          console.log(`❌ Обещание отклонено за ${delay}мс`);
        });
    }
  };

  function createPromise(delay) {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ delay });
        } else {
          reject({ delay });
        }
      }, delay);
    });
  }

  formEl.addEventListener('submit', onFormElSubmit);
}

secondHomeWork();
