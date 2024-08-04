
function func1(stars) {

    if (stars < 2) {
        return 'good'
    }
    if (stars >= 2 && stars < 10) {
        return 'very good'
    }
    if (stars >= 10) {
        return 'Excellent'
    }


}

function func2(stars) {

    console.log('You are ' + func1(stars))

}
func2(1)
func2(2)
func2(5)
func2(10)
func2(17)