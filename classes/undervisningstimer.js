function secretFunction(num) {

    if (num <= 1) return 1;

    return secretFunction(num-1) + secretFunction(num-2);

}

secretFunction(5);