## 函数轮询

```
timer: any = null;

getCurrentTask() {
    this.clearTimer();

    this.timer = setTimeout(() => {
            this.getCurrentTask();
            this.timer = null;
        }, 3000);
}

clearTimer(){
    this.timer && clearTimeout(this.timer);
}
```