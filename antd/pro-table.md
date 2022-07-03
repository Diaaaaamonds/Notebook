## antd pro-table使用

1. beforeSearchSubmit：搜索前处理参数，可添加数据，返回的参数为request的params
2. 右上角操作按钮通过options设置
    ```
    options={{ density: false, fullScreen: false, reload: false, setting: true }}
    ```
3. onLoad：加载数据完成后触发，可多次触发
4. postData：对通过url获取的数据在渲染到表格前进行处理，如筛选掉无效选项
5. actionRef：表单操作方法，刷新、重置并刷新、重置、加载更多、清空
    ```
    const tableRef = useRef<ActionType>();
    < ProTable actionRef={tableRef} />
    tableRef.current.reload();
    tableRef.current.reloadAndReset();
    tableRef.current.fetchMore();
    tableRef.current.clearSelected();
    ```