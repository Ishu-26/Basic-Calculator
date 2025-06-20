document.addEventListener('DOMContentLoaded', ()=> {

    const screen=document.getElementById('screen');
    const btns=document.querySelectorAll('.btn, .btn-operator');

    let currentInput= '';

    btns.forEach(btn=> {

        btn.addEventListener('click', ()=>{

            const value=btn.textContent;

            if(value==='C'){
                currentInput='';
                screen.value='';
            }

            else if (value==='='){

                try{

                    currentInput= eval(currentInput).toString();
                    screen.value=currentInput;

                }

                catch(error){
                    screen.value='Error';
                    currentInput='';

                }
             }

             else{

                currentInput+=value;
                screen.value=currentInput;
             }

        });


    });


    document.addEventListener('keydown', function(e) {

        const key=e.key;
        if(!isNaN(key) || ['+','-','*','/','.'].includes(key))
        {
            currentInput+=key;
            screen.value=currentInput;
        }

        else if(key==='Enter')
        {
            try
            {
                currentInput=eval(currentInput).toString();
                screen.value=currentInput;
            }
            catch
            {
                screen.value='Error';
                currentInput='';
            }
        }

        

        else if (key==='c' || key==='C')
        {
            currentInput='';
            screen.value='';
        }

        else if(key==='Backspace')
        {
            currentInput=currentInput.slice(0,-1);
            screen.value=currentInput;
            
        }
    });

});