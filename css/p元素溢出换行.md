## p标签溢出换行

1. 自动换行

```
p{
    word-wrap:break-word;
    word-break:normal;
}
```

2. 强制不换行

```
p{
    white-space:nowrap;
}
```

3. 强制英文单词换行

```
p{
    word-break: break-all;
}