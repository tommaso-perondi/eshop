var item_template = '<div class="col-lg-4 col-md-6 mb-4"> \
<div class="card h-100"> \
  <a href="#"><img class="card-img-top" src="{image}" alt=""></a> \
  <div class="card-body"> \
    <h4 class="card-title"> \
      <a href="#">Item One</a> \
    </h4> \
    <h5>{price}</h5> \
    <p class="card-text">{text}</p> \
  </div> \
</div> \
</div> '


//Replacer (String.Format())
if (!String.prototype.format) {
    String.prototype.format = function(dict) {
      return this.replace(/{(\w+)}/g, function(match, key) {
        return typeof dict[key] !== 'undefined'
          ? dict[key]
          : match
        ;
      });
    };
  }

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

document.getElementById("items").innerHTML = item_template.format({
    image: 'http://via.placeholder.com/350x150',
    price: 'world',
    text: 'test'
    });

function initializeItems(){
    items_obj = JSON.parse(Get());

}