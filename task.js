function Student(name, gender, age) {
    this.name = name,
        this.gender = gender,
        this.age = age
}

Student.prototype.setSubject = function(subjectName) {
    this.subjectName = subjectName
}

Student.prototype.addMark = function(mark) {
    if (this.mark === undefined) {
        this.mark = [mark];
    } else {
        this.mark.push(mark);
    }
}

Student.prototype.addMarks = function(...marks) {
    if (this.marks === undefined) {
        this.marks = [...marks];
    } else {
        this.mark.push(...marks);
    }
}


Student.prototype.getAverage = function() {
    if (this.mark === undefined) {
        console.log('Оценки еще не выставлены или были удалены');
    } else {
        let sum = 0;
        for (let i = 0; i < this.mark.length; i++) {
            sum = sum + this.mark[i];
        }
        return number((sum / this.mark.length).toFixed(2));

    }

}
Student.prototype.exclude = function(reason) {
    this.exclude = reason;
    delete this.mark;
    delete this.subjectName;
}