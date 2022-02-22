
const panels = document.querySelectorAll('.panel');
const bord = document.getElementById('container');


bord.addEventListener('click',($event)=>{
    console.log($event.target)
    let isPanel = $event.target.classList.contains('panel');
    // let isContent = $event.target.classList.contains('content');

    
    if (!isPanel) {
        return;
    }
    
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    let panel = $event.target;
    panel.classList.add('active');
})

