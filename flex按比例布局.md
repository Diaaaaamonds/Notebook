## flex设置子元素宽度

1. 三个属性
    
   flex-grow：flex增长值, 决定了当positive free space分配时，flex子元素相对于flex容器中的其余flex子元素的增长程度.

   flex-shrink：flex 缩小值, 确定在分配negative free space时，flex子元素相对于flex容器中其余flex子元素收缩的程度.

   flex-basis：设置了即为设置宽度，不设置为max-content

2. 概念

    正负自由空间：

    当flex子元素在主轴上的尺寸（大小）之和小于flex容器 的尺寸时，flex容器中就会有多余的空间没有被填充，这些空间就被叫做 positive free space。当flex子元素在主轴上的尺寸之和大于flex容器的尺寸时， flex容器的空间就不够用，此时flex子元素的尺寸之和减去flex容器的尺寸（flex 子元素溢出的尺寸）就是negative free space

3. 用法
   
   1. 三个同样尺寸

        flex: 1 1 0;

   2. 按比例分配

        flex-basis: 100; flex-grow:1;

        flex-basis: 150; flex-grow:2;