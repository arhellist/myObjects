function Student(name, gender, age) {
    this.name = name,
        this.gender = gender,
        this.age = age
}

Student.prototype.setSubject = function(subjectName) {
    this.subjectName = subjectName
}

Student.prototype.addMark = function(...mark) {
    if (this.mark === undefined) {
        this.mark = mark;
    } else {
        this.mark = [...this.mark, ...mark];
    }
}

Student.prototype.getAverage = function(Average) {
    if (this.mark === undefined) {
        console.log('Оценки еще не выставлены или были удалены');
    } else {
        let sum = 0;
        for (let i = 0; i < this.mark.length; i++) {
            sum = sum + this.mark[i];
        }
        Average = Number((sum / this.mark.length).toFixed(2));
        return Average
    }

}
Student.prototype.exclude = function(reason) {
    this.exclude = reason;
    delete this.mark;
    delete this.subjectName;
}