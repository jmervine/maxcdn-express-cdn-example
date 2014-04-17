/***
 * scipt test content
 */
function setSubHeading() {
    var h2 = document.getElementsByClassName('subhead').item(this);
    var subhead = window.location.pathname;
    if (subhead && subhead !== '/') {
        h2.innerHTML = '&gt; '+subhead;
    }
};
