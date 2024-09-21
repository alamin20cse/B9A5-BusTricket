
const seatList=[];
const selectedBokedList=document.getElementById('selected-boked-list');

let ID0=Number(document.getElementById('id0').innerText);

// TakaBDT=document.getElementById('taka-bdt');
LeftSeat=Number(document.getElementById('left-seat').innerText);
let TAKA=0;

function seatHandel(event)
{
    if(!seatList.includes(event.innerText))
    {
        if(ID0>=4)
        {
            alert("You have booked Maximum seat in a day ");
            return;
        }


        
    seatList.push(event.innerText);
    selectedBokedList.innerHTML+=` <li class="flex justify-between" >
                            <p> ${event.innerText}  </p>
                            <p>Econany </p>
                            <p>550 </p>
                        </li>`;
                        // button green
                        event.style.background='green'
                        // disabled no booked
                        document.getElementById('nobooked').classList.add('hidden');

                        // count;
                        ID0++;
                       document.getElementById('id0').innerText=ID0;
                    //    left seat
                    LeftSeat=LeftSeat-1;
                    document.getElementById('left-seat').innerText=LeftSeat;
                    //    price

                       TAKA=TAKA+550;
                       document.getElementById('taka-bdt').innerText=TAKA;
    

    }
    else
    {
        alert("Seat is alredy booked");
        return;
    }

}