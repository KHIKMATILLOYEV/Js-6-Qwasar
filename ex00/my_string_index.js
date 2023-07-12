function my_string_index(param_1, param_2) {

    for (var aaa = 0; aaa < param_1.length; aaa++) {

        if(param_1.charAt(aaa) == param_2)
            return (aaa);

    }
    return (-1);

}
