# NIKEDIN Online Store[:link:](http://220.128.133.15/s1080417/www.nd.com/#/)
[![](https://i.imgur.com/Rgrd2PH.jpg)](http://220.128.133.15/s1080417/www.nd.com/#/)
獨立 SPA 製作電商網站，包含版本設計、前端處理、後端api、資料庫建置。

Vue CLI 為專案架構製作、Vuex 管理共同資料(購物車資料...等)、Vue Router 控制頁面路由名稱，ADMIN 統一整合由 admin/api.js 操作後端 API 動作，再經由 SweetAlert 互動顯示操作狀態(成功/失敗/操作完成)。
前端由 AXIOS 後端 API 互動；後端使用 PHP PDO 技術連線 MySQL 操作 SQL CRUD。

- ### 開發技術:
    
    |設計|套件|前端|後端|資料庫|版控|
    |-|-|-|-|-|-|
    |AI|Bootstrap-Vue|Vue CLI|PHP|MySQL|GitKraken||
    |PS|SweetAlert2|Vue Router|
    |XD|AXIOS|Vuex|
    
- ### 主要功能:
    - #### 購物車
        ![](https://i.imgur.com/zRRbg1A.jpg)

        - POPUP 顯示購物車清單
        - **無登入** 本地紀錄購物車產品，自動顯示上次保存。
        - **登入後** 後端紀錄購物車之產品，登入後自動恢復上次保存。
    - #### 購物清單 修改/新增
        ![](https://i.imgur.com/zWuh2L2.png)

        - 同規格商品(新增)自動彙整加總
        - 同步更新本地紀錄
        - 後端同步會員購物清單(登入)
        - 畫面、購物預覽同步更新
    - #### SEARCH 搜尋
        ![](https://i.imgur.com/MrZ1sFF.png)
        - 搜尋筆數、搜尋關鍵字
        - 資料庫 跨 table 即時搜尋
        - 金額高低、名稱排序
    - #### PRODUCT 產品頁
        ![](https://i.imgur.com/DAbgyYe.png)

        - 即時顯示目前庫存量
        - 依庫存量顯示，可選取數量
    - #### SIGN IN 登入
        ![](https://i.imgur.com/3CF4b9u.jpg)

        - 帳號預先確認 (帳號是否存在)
        - customer & admin 同一入口登入
        - admin 登入，自動轉至後台頁面
        - customer 登入，登入後自動恢復上次保存購物清單
    - #### ROUTER 路由設定
        ![](https://i.imgur.com/ZZTXduy.png)

        - 依頁面、產品、類別，顯示 url 路由命名
    - #### ADMIN 後台
        ![](https://i.imgur.com/QY5WMPG.png)
        
        ![](https://i.imgur.com/2terh7Y.png)
        - SLIDE、PRODUCT 前台->後台->資料庫 CRUD
        - 上傳圖片即時顯示 (HTML5 API)
        - EVENT 一鍵復製mail，操作狀態更新功能
