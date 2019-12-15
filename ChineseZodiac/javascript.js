function ChineseZodiac() {
    let zodiacyear= prompt("Please enter the Year you want to check!");
    let zodiacsign= ((zodiacyear-4)%12);
    switch (zodiacsign){
        case "0":
        alert("It is the Year of the Rat"); break;
        case 1:
            alert("It is the Year of the Ox");  break;
            case 2:
                alert("It is the Year of the Tiger"); break;
                case 3:   
                    alert("It is the Year of the Rabbit"); break;
                    case 4:    
                        alert("It is the Year of the Dragon"); break;
                        case 5:
                            alert("It is the Year of the Snake"); break;
                            case 6:
                                alert("It is the Year of the Horse"); break;
                                case 7:
                                alert("It is the Year of the Goat"); break;
                                case 8:
                                    alert("It is the Year of the Monkey"); break;
                                    case 9:
                                    alert("It is the Year of the Rooster"); break;
                                    case 10:
                                        alert("It is the Year of the Dog"); break;
                                        case 11:
                                            alert("It is the Year of the Pig"); break;
                                            default:alert("Please check for any input errors!");
                         
    }

}

ChineseZodiac()
