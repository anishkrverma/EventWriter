exports.getdate = getdate;
var getdate = function () {
    let today = new Date();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    return day = today.toLocaleDateString("en-US", option);

};
exports.getday = getday;
function getday() {
    let today = new Date();

    let option = {
        weekday: "long"
    };
    return day = today.toLocaleDateString("en-US", option);
}