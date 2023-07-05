function secondHomeWork() {
  const formEl = document.querySelector('.form');

  const onFormElSubmit = event => {
    event.preventDefault();

    const { delay, step, amount } = event.target.elements;

    for (let i = 1; i <= Number(amount.value); i++) {
      const position = i;
      const currentDelay = Number(delay.value) + (i - 1) * Number(step.value);

      createPromise(position, currentDelay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  };

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  formEl.addEventListener('submit', onFormElSubmit);
}

secondHomeWork();
