function initUI(){
    console.log('[init UI]');

    //native js
    document.addEventListener('DOMContentLoaded', function(){
        var body = document.querySelector('body');
        document.getElementById('sidebarCollapse').addEventListener('click', function() {
            body.classList.toggle('show-sidebar');
        });
        var listItems = document.querySelectorAll('.left-filter__item');
        for(var i = 0; i < listItems.length; i++){
            listItems[i].addEventListener('click', function(event) {
                this.classList.toggle('left-filter__item_active');
            });
        }
        var table = document.querySelector('.tab-content>table');
        var name = '';
        var elem = document.querySelector('.container-fluid>.padding-20.bg-white')
        if(elem.classList.contains("basket")){
            name = "basket";
        }
        if(elem.classList.contains("hokkey")){
            name = "hokkey";
        }
        if(elem.classList.contains("football")){
            name = "football";
        }
        document.getElementById('all_match').addEventListener('click', function() {
            table.classList = name;
        });
        document.getElementById('live_match').addEventListener('click', function() {
            table.classList = name+"-live";
        });
        document.getElementById('favorite_match').addEventListener('click', function() {
            table.classList = name+' '+name+"-favorite";
        });
    });
    //jq
    // $(document).ready(function () {
    //     ('#sidebarCollapse').on('click', function () {
    //          $('body').toggleClass('show-sidebar');
    //     });
    // });
}
initUI();
