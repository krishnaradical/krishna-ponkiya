import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AppConstants {

    public static  JWT:String = "jwt";

	public static  JWT_USER_NAME:String = "userName";

	public static  JWT_TYPE :String= "jwtType";

	public static  JWT_PLUGIN_KEY:String = "pluginKey";

	public static  JWT_PLUGIN_ID:String = "pluginId";

	public static  JWT_CONNEX_SESSION_ID:String = "connexSessionId";

	public static  JWT_PLUGIN_TYPE:String = "pluginType";

	public static  USER_ID:String = "userId";

	public static  CLIENT_IP:String = "clientIp";

	public static  CUSTOMER_GROUP_ID:String = "customerGroupId";

	public static  ISSUER:String = "iss";

	public static  EXPIRATION:String = "exp";

	public static  EMAIL:String = "email";

	public static  AUTHORIZATION:String = "Authorization";

	public static  BEARER:String = "Bearer ";

	public static  RECAPTCHATOKEN :String= "reCaptchaToken";
	
	
	public static  AUTHORIZED_USER:String = "authorizedUser";
	public static  FORGOT_PASSWORD:String = "forgotPassword";
  }