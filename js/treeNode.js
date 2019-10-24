function TreeNode(initObj){
    this.id = initObj.id;
    this.parentId =  initObj.parentId;
    this.allChildFoldernames = [];
    this.isExpanded = false;

    this.addChildName = function(childName){
        if (this.childFolderNames === undefined){
            this.allChildFolderNames = [];
        }
        this.allChildFolderNames.push(childName);
    };
}