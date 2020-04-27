export class EHRActionRoleDetailsView {
    id:Number;
    actionOrder:Number;
    userId:Number
   
    roleId:Number;
    displayName:string;
    menuType:Number;
    routeSubString:string;
    menuIcon:string;
    name:string;
    emrActionRoleId:Number;
    action:String;
    childrens?: EHRActionRoleDetailsView[];
}