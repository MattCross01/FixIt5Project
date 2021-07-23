module.exports = {
    get_emoji: () => {
      const randomNum = Math.random();
      let customer = "📗";
  
      if (randomNum > 0.7) {
        customer = "📘";
      } else if (randomNum > 0.4) {
        customer = "📙";
      }
  
    },
  };