import { Button } from './button.js'

class coinButton {
    constructor(coinType, onClick =() => {}){
        this.button = new Button();

        this.events = {
            onClick
        };

        this.button.setText(`1${coinType}`);
        this.button.addClass(['coin', 'active']);

        this.button.setOnClickListener(() => this.onElementClick());
        
        this.button.appendTo(document.querySelector('.coin-section'));
    }

    onElementClick(){
        this.button.setActive(false);

        this.events.onClick();
    }
}

export{}