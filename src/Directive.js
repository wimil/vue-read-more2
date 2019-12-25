export default {
  twoWay: true,
  bind: function(el, bind, vn) {
    const params = bind.value;
    if (params !== undefined) {
      //if(el.innertText)
      const text = params.text === undefined ? el.innerText : params.text;

      if (text) {
        if (text.length > params.limit) {
          vn.elm.textContent = text.substring(0, params.limit);

          //read more
          var read_more = document.createElement("a");
          read_more.href = "#";
          read_more.text = params.moreStr ? params.moreStr : "Read More";

          //read less
          var read_less = document.createElement("a");
          read_less.href = "#";
          read_less.text = params.lessStr ? params.lessStr : "Read Less";

          vn.elm.append(" ", read_more);

          read_more.addEventListener("click", function() {
            vn.elm.textContent = text;
            vn.elm.append(" ", read_less);
          });

          read_less.addEventListener("click", function() {
            vn.elm.textContent = text.substring(0, params.limit);
            vn.elm.append(" ", read_more);
          });
        }
      } else {
        vn.elm.textContent = "";
      }
    }
  },
  update: function(newValue) {}
};
