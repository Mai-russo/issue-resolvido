var numSort = []
var numEsco = []
let sort
let cont
function sortearNumeros()
{
  numSort = []

  for (var i=0; i<6; i++)
  {
    do
    {
      sort = Math.ceil(Math.random() * 60)
      sort = (sort == 0) ? 1 : sort


    }
    while (numSort.includes(sort))

    numSort.push(sort)
  }

}

function addToList(num, pos)
{
  if(num.length == 2)
  {
    if (numEsco.includes(num))
    {
        alert2(PorFavor Não repetir números)
    }

    else if (parseInt(num) <= 0|| parseInt(num) > 60)
    {
      alert2("O Número digitado deve ser de 1 a 60")
    }

        else
        {
            numEsco[pos-1] = num
        }
  }
}
function alert2(texto){
  swal.fire(
  'Oops!',
  texto,
  'error'
)
}
function verificarAcertos()
{
    sortearNumeros()

    let cont = 0
    if (numEsco.length !== 6)
      {
      alert2("Termine de selecionar os 6 Numeros\n digite 6 números de 01 a 60")
      }

      else
      {
          for (var i=0; i<6; i++)
          {
              if (numSort.includes(parseInt(numEsco[i])))
              {
                  cont++
              }
          }
          printNumSort()
          document.getElementById('totalAcertos').innerHTML = "Voce acertou " + cont
      }
}

function printNumSort()
{
    document.getElementById('numSort').innerHTML = ""
    for (var i=0; i<numSort.length; i++)
    {
        let li = document.createElement("li");
        li.append(numSort[i]);
        li.classList.add(result);
        document.getElementById('numSort').append(li);
    }
}
