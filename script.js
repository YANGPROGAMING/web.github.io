var btnInsert = document.getElementById('btn-insert');
var btnSell = document.getElementById('btn-sell');
var btnReprt = document.getElementById('btn-report');
var btnDrop = document.getElementById('btn-drop');
var btnInsertPro = document.getElementById('btn-insrt-product');
var category = document.getElementById('category');
var btnModifyPro =  document.getElementById('btn-modify-pro');
var CategoryPro = document.getElementById('insert-pro');
var modifyPro = document.getElementById('modify-pro');

var btnsellproduct = document.getElementById('btn-sell-product');
var btnmodifyproductsell = document.getElementById('btn-modify-product-sell');

var btnReportProduct = document.getElementById('btn-report-product');
var btnViewReportProduct = document.getElementById('btn-view-report-product');
// @btn 
var btnAddStaff = document.getElementById('add-staff');
var btnexitinsert = document.getElementById('btn-exit-insert');
var btnviewprodduct = document.getElementById('btn-view-prodduct');
var btndeleteproduct = document.getElementById('btn-delete-product');

var btnexitsell = document.getElementById('btn-exit-sell');

var btnsearchstaff = document.getElementById('btn-search-staff');

var btnexitreport = document.getElementById('btn-exit-report');

var insertProductContain = `
    <ul id="insert-pro">
        <li>Code  :.....</li>
        <li>Model :.....</li>
        <li>Price :.....</li>
        <li>Stock :.....</li>
        <li>Category :.....</li>
    </ul>
`;

var modifyProductContain = `
<ul id="modify-pro">
    <li>
        Edit
        <ol>
            <li>Edit Model</li>
            <li>Edit Stock</li>
            <li>Edit Price</li>
            <li>Edit Category</li>
        </ol>
    </li>
    <li>Delete</li>
    <li>Sort</li>
</ul>
`;

var sellDetail = `
<ul>
    <li>
        Insert
        <ol>
            <li>Staff id</li>
            <li>Cotomer name</li>
            <li>Product code</li>
            <li>Prodecut Quantity</li>
        </ol>
    </li>
</ul>`;
var modifysellDetail = `
    <ul>
        <li>Edit
            <ol>
                <li>Edit Staff id</li>
                <li>Edit Cotomer name</li>
                <li>Edit Product code</li>
                <li>Edit Prodecut Quantity</li>
            </ol>
        </li>
    </ul>`;

var tableStock = `
<table class="table table-dark table-hover align-middle">
<tr>
    <th>Code</th>
    <th>Model</th>
    <th>Category</th>
    <th>Price</th>
    <th>Stock</th>
</tr>
<tr>
    <td>100</td>
    <td>ASUS</td>
    <td>ASUS VivoBook</td>
    <td>699.99$</td>
    <td>10</td>
</tr>
<tr>
    <td>101</td>
    <td>ASUS</td>
    <td>ASUS ZenBook</td>
    <td>999.59$</td>
    <td>15</td>
</tr>
<tr>
    <td>102</td>
    <td>ASUS</td>
    <td>ASUS ROG Skar</td>
    <td>1199.49$</td>
    <td>8</td>
</tr>
</table>
`;
var tableReport = `
<table class="table table-hover table-dark">
<tr>
    <th>Id</th>
    <th>Costomers</th>
    <th>Code</th>
    <th>Qty</th>
    <th>Model</th>
    <th>Category</th>
    <th>Price</th>
    <th>Total</th>
    <th>Discount</th>
    <th>Payment</th>
</tr>
<tr>
    <td>1</td>
    <td>Srey Ka</td>
    <td>100</td>
    <td>2</td>
    <td>ASUS Vivobook</td>
    <td>ASUS</td>
    <td>1200$</td>
    <td>2400$</td>
    <th>15%</th>
    <td>2200$</td>
</tr>
<tr>
    <td>2</td>
    <td>Master Yang</td>
    <td>101</td>
    <td>3</td>
    <td>Macbook Air 15 pro</td>
    <td>MacBook</td>
    <td>1500$</td>
    <td>3000$</td>
    <th>15%</th>
    <td>2950$</td>
</tr>
</table>
<h4>Total payment = 5150$</h4>
`;

var productInserted_table = `
<table class="table table-hover table-dark">
<tr>
    <th>Id</th>
    <th>Costomers</th>
    <th>Code</th>
    <th>Qty</th>
    <th>Model</th>
    <th>Category</th>
    <th>Price</th>
    <th>Total</th>
    <th>Discount</th>
    <th>Payment</th>
</tr>
<tr>
    <td>1</td>
    <td>Srey Ka</td>
    <td>100</td>
    <td>2</td>
    <td>ASUS Vivobook</td>
    <td>ASUS</td>
    <td>1200$</td>
    <td>2400$</td>
    <th>15%</th>
    <td>2200$</td>
</tr>
<tr>
    <td>2</td>
    <td>Master Yang</td>
    <td>101</td>
    <td>3</td>
    <td>Macbook Air 15 pro</td>
    <td>MacBook</td>
    <td>1500$</td>
    <td>3000$</td>
    <th>15%</th>
    <td>2950$</td>
</tr>
</table>
`;
var addStaffContain = `
    <ul>
    <li>Add Staff
        <ol>
            <li>Staff Id</li>
            <li>Staff Name</li>
            <li>Staff Gender</li>
        </ol>
    </li>
    </ul>`;

var reportStaffContain = ` 
<table class="table table-hover table-dark">
<tr>
    <th>Id</th>
    <th>Costomers</th>
    <th>Code</th>
    <th>Qty</th>
    <th>Model</th>
    <th>Category</th>
    <th>Price</th>
    <th>Total</th>
    <th>Discount</th>
    <th>Payment</th>
</tr>
<tr>
    <td>2</td>
    <td>Master Yang</td>
    <td>101</td>
    <td>3</td>
    <td>Macbook Air 15 pro</td>
    <td>MacBook</td>
    <td>1500$</td>
    <td>3000$</td>
    <th>15%</th>
    <td>2950$</td>
</tr>
</table>
<h4>Total payment = 2950$</h4>
`;
let check = true;
let bool = true;
btnInsert.addEventListener("click",function(){
    
    if(check){
        btnDrop.style="height: 200px";
        check = false;
    }else{
        btnDrop.style="height: 0px";
        category.style="height : 0px;";
        check = true;
        bool = true;
    }
    
    btnInsertPro.style='display: contain;';
    btnModifyPro.style='display: contain;';
    btnReportProduct.style='display: none;';
    btnViewReportProduct.style='display: none;';

    btnexitreport.style='display: none;';
    btnsearchstaff.style='display: none;';

    btndeleteproduct.style='display: none;';
    btnviewprodduct.style='display: none;';

    btnAddStaff.style='display: contain;';
    btnexitinsert.style='display: contain;';


    btnsellproduct.style='display: none;';
    btnmodifyproductsell.style='display: none;';
    btnexitsell.style='display: none;';

    btnInsertPro.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = insertProductContain;
    });
    btnModifyPro.addEventListener('click',function(){
        if(bool){
            category.style="height : 250px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = modifyProductContain;
    });
    btnAddStaff.addEventListener('click',function(){
        if(bool){
            category.style="height : 250px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = addStaffContain;
    });
    btnexitinsert.addEventListener('click',function(){
            category.style="height : 0px;";
            btnDrop.style="height: 0px";
            bool = true;
            bool = true;
    });
});

btnSell.addEventListener("click",function(){
    
    if(check){
        btnDrop.style="height: 200px";
        check = false;
    }else{
        btnDrop.style="height: 0px";
        category.style="height : 0px;";
        check = true;
        bool = true;
    }
    btnInsertPro.style='display: none;';
    btnModifyPro.style='display: none;';
    btnReportProduct.style='display: none;';
    btnViewReportProduct.style='display: none;';

    btndeleteproduct.style='display: contain;';
    btnviewprodduct.style='display: contain;';
    btnexitsell.style='display: contain;';

    btnAddStaff.style='display: none;';
    btnexitinsert.style='display: none;';

    btnexitreport.style='display: none;';
    btnsearchstaff.style='display: none;';
    
    btnsellproduct.style='display: contain;';
    btnmodifyproductsell.style='display: contain;';

    btnsellproduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = sellDetail;
    });
    btnmodifyproductsell.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = modifysellDetail;
    })
    btnviewprodduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = productInserted_table;
    })
    btndeleteproduct
btndeleteproduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = `<p class="text-center">Delete one row of product by product code.</p>`;
    })
    btnexitsell.addEventListener('click',function(){
        category.style="height : 0px;";
        btnDrop.style="height: 0px";
        bool = true;
        bool = true;
    });
});

btnReprt.addEventListener("click",function(){
    btnInsertPro.style='display: none;';
    btnModifyPro.style='display: none;';
    btnsellproduct.style='display: none;';
    btnmodifyproductsell.style='display: none;';
    btnexitsell.style='display: none;';

    btnexitreport.style='display: contain;';
    btnsearchstaff.style='display: contain;';

    btndeleteproduct.style='display: none;';
    btnviewprodduct.style='display: none;';

    btnAddStaff.style='display: none;';
    btnexitinsert.style='display: none;';
    
    btnReportProduct.style='display: contain;';
    btnViewReportProduct.style='display: contain;';
    if(check){
        btnDrop.style="height: 200px";
        check = false;
    }else{
        btnDrop.style="height: 0px";
        category.style="height : 0px;";
        check = true;
        bool = true;
    }

    btnReportProduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = tableStock;
    });
    btnViewReportProduct.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = tableReport;
    });
    btnsearchstaff.addEventListener('click',function(){
        if(bool){
            category.style="height : 200px;";
            bool = false;
        }else{
            category.style="height : 0px;";
            bool = true;
        }
        category.innerHTML = reportStaffContain;
    });
    btnexitreport.addEventListener('click',function(){
        category.style="height : 0px;";
        btnDrop.style="height: 0px";
        bool = true;
        bool = true;
    });
});