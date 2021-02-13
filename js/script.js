class util {
    
    constructor() {
    this.words = ["ㅈㄱㄴ", "ㄷㄷ", "아싸"];
    // js에서 local file 읽는 법을 찾지 못해 임시 배열 생성

    this.comment = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    //코멘트 입력
    }

    choice = (lists) => Math.floor(Math.random() * lists.length);
    // 무작위 index 생성
        
    pop = (lists) => lists.pop(this.choice(lists));
    // 배열에서 무작위로 선정 후 반환 및 삭제


    read_file = function () {};
    // 미완성
    // local file 읽는 법이 html 경유밖에 찾지 못해 완성하지 못함


    print_result = function(count) {

        var rate = Math.round(count / this.words.length * 10);

        return this.comment[rate];

    };
    // 정답 비율 구하고 그에 맞는 코멘트 출력

}

var main = function() {

    const controller = new util();

    var num;
    return controller.print_result(num);

};

main();