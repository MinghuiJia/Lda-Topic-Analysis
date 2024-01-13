const clock = async (s: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, s * 1000);
  });
};

export { clock };
