var demo = new Vue({
      el: '#app',
      data: {
        message:"",
        gridColumns: ['customerId', 'companyName', 'contactName', 'phone'], 
        gridData: [],
        apiUrl: 'http://localhost/vuedemo/m/api/index.php',
        addUrl: 'http://localhost/vuedemo/m/api/ad_save.php',
        deleteUrl: 'http://localhost/vuedemo/m/api/delete.php',
        updateUrl: 'http://localhost/vuedemo/m/api/update.php',
        editGetUrl: 'http://localhost/vuedemo/m/api/editget.php',
        item: { 
          id: '',
          name: '',
          phone: ''
        }
      },
      ready: function() {
        this.getCustomers()
      },
      methods: {
        getCustomers: function() { 
          this.$http.get(this.apiUrl)
            .then((response) => {
                var obj = eval ("(" + response.data + ")");
                this.$set('gridData', obj);
                //console.log(obj);  
                //console.log(response);  
            })
            .catch(function(response) {
                //console.log(response); 
            })
        },
        //显示增加form弹框
        createCustomer: function() {
          //var vm = this;
          //console.log(this.$els.fixbox);// 获取节点this.$els.msg.textContent 
          this.$els.fixbox.style.display = "block";
        },
        //添加到数据库
        addCustomer: function() {  
          //console.log(this.item);
          this.$http.post(this.addUrl, this.item,{emulateJSON:true})
            .then((response) => {
                console.log(response.data);
                if(response.data=="1"){
                  this.$set('item', {})
                  this.getCustomers();
                  this.$els.fixbox.style.display = "none";
                  console.log("添加数据库成功");
                }else{
                  console.log("添加数据库失败");
                }
            }); 
        },
        //删除数据
        deleteCustomer: function(id) {  
          //console.log(id);
          this.$http.delete(this.deleteUrl + '?id=' + id,{emulateJSON:true}) 
          .then((response) => { 
            if(response.data=="1"){ 
                  this.getCustomers(); 
                  console.log("删除数据库成功");
                }else{
                  console.log("删除数据库失败");
                }
          }); 
        },
        //显示更新form弹框
        showUpdateCustomer: function(index) {
          //var vm = this;
          //console.log(this.$els.fixbox);// 获取节点this.$els.msg.textContent 
          //
          var id = this.gridData[index].id  ;
          console.log(id)
          this.$http.get(this.editGetUrl+ '?id=' + id)
            .then((response) => {
                var obj = eval ("(" + response.data + ")");
                this.$set('item', obj);
                console.log(this.item);  
                //console.log(response);  
                this.$els.updatebox.style.display = "block";
            }) 
        },
        //修改更新数据
        updateCustomer: function(id) {
          console.log(id);
          this.$http.post(this.updateUrl + '?id=' + id , this.item, {emulateJSON:true})
            .then((response) => {
              console.log(response);
              if(response.data=="1"){ 
                  this.getCustomers(); 
                  this.$els.updatebox.style.display = "none";
                  console.log("更新数据库成功");
                }else{
                  console.log("更新数据库失败");
                } 
            })
        }
      }
});

