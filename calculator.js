// função

const calc = (e)==> {
       let a = document.getElementById("primeiro valor").value;
       let b = document.getElementById("segundo valor").value;
       let local = document.getElementById("valor somado");

      if (!a){a = 0}
      if (!b){b = 0}

      result = eval(a+e+b);

      if(isNaN(result)){result = "0"}

      local.innerText = result;
}
