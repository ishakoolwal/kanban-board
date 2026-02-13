export const mockApi = () => {
  return new Promise((resolve, reject) => {

    const delay = Math.random() * 1000 + 1000; 

    setTimeout(() => {

      const shouldFail = Math.random() < 0.05; 

      if (shouldFail) {
        reject("API Failed");
      } else {
        resolve("Success");
      }

    }, delay);

  });
};