;(function(){
	window.TaskManager = function(el){
           this.id = 0;
           this.div = el;
    }
    TaskManager.prototype.get_id = function(){
        return this.id;
        }
    TaskManager.prototype.id_generate = function(){
        return ++this.id;
    }
    TaskManager.prototype.addTask = function(str_in){
        // var task = new Task(this.el, str_in);
        var task = new Task(str_in, this.id_generate());
        var html = task.render();
        this.div.appendChild(html);
        return "task"
    }
	
	window.Task = function(title, id){
        this.title = title;
        this.id = id; 
    }
    Task.prototype.render = function(){
        var div = document.createElement('div');
        div.classList.add("tasks");
        var span = document.createElement('span');
        span.innerText = this.title;
        span.setAttribute("data-id", this.id);
        var checkbox = document.createElement('input');
        checkbox.addEventListener('click', function(){
            if(this.checked){
                var span_tmp=document.querySelector("[data-id='"+this.getAttribute('count-id')+"']");
                span_tmp.classList.add('completed');
            }else{
                var span_tmp=document.querySelector("[data-id='"+this.getAttribute('count-id')+"']");
                span_tmp.classList.remove('completed');
            }
        })
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute('count-id', this.id);
        
        div.appendChild(span);
        div.appendChild(checkbox);
        
        return div;
    }
    
}())