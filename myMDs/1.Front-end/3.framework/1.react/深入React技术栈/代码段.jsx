const DeleteAccount = () =>({
  type:'div',
  props:{
    children:[{
      type:'p',
      props:{
        children:"r  u sure?",
      },
    },{
      type: DangerButton,
      props:{
        children:'Confirm',
      },
      type:Button,
      props:{
        color:'blue';
        children:'Cancel',
      },
    }]
   }
 });


const DeleteAccount = () =>(
  <div>
    <p>r u sure? </p>
    <DangerButton>Confirm</DangerButton>
    <Button color='blue'>Cancel</Button>
  </div>
);
