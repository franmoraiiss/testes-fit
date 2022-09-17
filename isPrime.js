function isPrime(number) {
  let iterations = 0;  

  for (let i = 2; i < number; i++) {
    iterations++;
    
    if (number % i === 0) {
      return [false, iterations];
    }
  }

  return [true, iterations];
}

(() => {
  // Colocar o número que deseja verificar se é primo
  let number = 1231;

  const [prime, iterations] = isPrime(number);

  if(prime) {
    console.log(`O número ${number} é primo. Número de iterações necessárias: ${iterations}`);
  } else {
    console.log(`O número ${number} não é primo. Número de iterações necessárias: ${iterations}`);
  }
  
})();
