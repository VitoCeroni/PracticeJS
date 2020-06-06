curScene = 0;

function changeScene(decision) {

    if ( curScene == 0 ) {
        curScene = 1;
        message = " Однажды Стикмэн отправился на поиски приключений. Оказавшись за городом наш герой приближался к развилке.";
        decision1 = "Пойти через лес";
        decision2 = "Спуститься к реке";
        document.getElementById("decision2").style.visibility = "visible"
    } else if ( curScene == 1 ) {
        if ( decision == 1 ) {
            curScene = 2;
            message = " Стики пошел лесом. Вдруг вдали он увидел ветхую хижину.";
            decision1 = "Заглянуть в окно";
            decision2 = "Постучаться в дверь";
        } else {
            curScene = 3;
            message = " У реки просто невиносимо захотелось порыбачить.";
            decision1 = "Пойти к мосту";
            decision2 = "Рыбачить";
        }
    } else if ( curScene == 2 ) {
        if ( decision == 1 ) {
            curScene = 4;
            message = " Пробравшись к окну Стики тихо заглянул в окно и увидел внутри...Ведьму. Она что-то шептала над котлом";
            decision1 = "Тихо уйти";
            decision2 = "Быстро убегать";
        } else {
            curScene = 5;
            message = "Доверчивый идиот Стикмэн постучал в дверь и ему открыла женщина приклонных лет. Вобщем в котле его и сварили";
            decision1 = "Заново";
            document.getElementById("decision2").style.visibility = "hidden";
        }
    } else if ( curScene == 3 ) {
        if ( decision == 1 ) {
            curScene = 6;
            message = " На мосту дорогу Стикмэну перегородил Троль. Ры-ба дай !!! ту-да идти! сказал троль";
            decision1 = "Прыгнуть в реку";
            decision2 = "Пойти на рыбалку";
        } else {
            curScene = 7;
            message = "Забежав быстро домой за снастями и по пути прихватив пивка," +
                      "Стикмэн радостно бежал обратно позабыв зачем отпралялся утром." +
                      "Он не подозревал что до вечера не будет не единой поклевки";
            decision1 = "Заново";
            document.getElementById("decision2").style.visibility = "hidden";
        }
    } else if ( curScene == 4 ) {
        if ( decision == 1 ) {
            curScene = 8;
            message = " Тихонько наш герой отступил назад и расчетливыми шагами" + 
                      " оставил позади эту страшную хижину. Внезапно лес стал дремучим";
            decision1 = "Пока конец";
            document.getElementById("decision2").style.visibility = "hidden";
        } else {
            curScene = 5;
            message = "Развернувшись чтоб бежать, маленький невдал споткнулся" +
                      " и услышав шум, старая женщина с довольным лицом овладела мальчиком";
            decision1 = "Заново";
            document.getElementById("decision2").style.visibility = "hidden";
        }
    } else if ( curScene == 6 ) {
        if ( decision == 1 ) {
            curScene = 9;
            message = "Хорошо что течение не сильное,  несмотря что Стикмэн нарисован одним слоем. И вот он другой берег.";
            decision1 = "Пока конец";
            document.getElementById("decision2").style.visibility = "hidden";
        } else {
            curScene = 7;
            message = "Найдя кусок лески, не мудрым способом сделав удилище, Стик уселся ловит рыбу. Темнело. Холодало. Нет рыбы";
            decision1 = "Заново";
            document.getElementById("decision2").style.visibility = "hidden";
        }
    } else if ( curScene == 8 ) {
        curScene = 0;
        message = "Продолжение следует";        
    } else if ( curScene == 9 ) {
        curScene = 0;
        message = "Продолжение следует";
    } else if ( curScene == 7 || curScene == 5 ) {
        curScene = 0;
        message = "";
    }

function replaceNodeText(id, newText) {
    var node = document.getElementById(id);
     while ( node.firstChild ) 
      node.removeChild(node.firstChild);
      node.appendChild(document.createTextNode(newText));
        
}
    
    replaceNodeText("scenetext", message);
    replaceNodeText("decision1", decision1);
    replaceNodeText("decision2", decision2);    
    
    document.getElementById("sceneimg").src = "scene" + curScene + ".png";

    
    var history = document.getElementById("history");
    if ( curScene != 0 ) {
        var decisionElem = document.createElement("p");
        decisionElem.appendChild(document.createTextNode(message));
        history.appendChild(decisionElem);
    } else {
        while ( history.firstChild )
        history.removeChild(history.firstChild);
    }
}

