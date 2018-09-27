<!--
**************************************
*  名称：登录页面
*  作用：用户登录，识别管理员，加盟商，机构
*  作者：闫聪洋
**************************************
-->
<template>
	<div class="login-form" v-bind:style="{backgroundImage:'url(/static/images/' + loginBg + ')'}" @keydown.enter="login">
		<div class="login-center ">
			<div class="login-box">
				<p>账号登录</p>
				<div>
					<img src="/static/images/username-icon.png">
					<input v-model="username" placeholder="用户名">
				</div>
				<div>
					<img src="static/images/password-icon.png">
					<input v-model="password" placeholder="密码" type="password">
				</div>
				<div style="font-size:12px;position:absolute;top:29%;left:11%">
					<span>{{userMessage}}</span>
				</div>
				<div style="font-size:12px;position:absolute;top:52%;left:11%">
					<span>{{passMessage}}</span>
				</div>
				<el-button type="primary" v-on:click="login" :loading="isLogin" style="margin-top:30px">登 录</el-button>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from "vue";
	import router from "../../router";
	import config from '../../assets/js/config';
	import {reqLogin,reqUserInfo} from '../../api/api'
	export default {
		name: "login",
		data: function() {
			return {
				loginBg:'',
				isChuying:false,
				username: "",
				password: "",
				userMessage: "",
				passMessage: "",
				isLogin: false
			};
		},
		methods: {
			login: function() {
				this.isLogin = true;
				if(this.username == "") {
					this.userMessage = "用户名不能为空";
					this.isLogin = false;
				}else{
					this.userMessage = "";
				} 
				if(this.password == "") {
					this.passMessage = "密码不能为空";
					this.isLogin = false;
				}else{
					this.passMessage = "";
				} 
				if(this.username != "" && this.password != ""){
					reqLogin().then(
						reqUserInfo({
								UserName: this.username,
								Password: this.password
							}).then(
							response => {
								this.isLogin = false;
								context.clear();
								this.userMessage = "";
								if(response.data.Meta.RoleType == 0) {
									router.push({
										path: "/kgList/Master"
									});
									localStorage.RoleType = response.data.Meta.RoleType;									
								}else if(response.data.Meta.RoleType == 3){
									router.push({
										path: "/kindergartenMain/kindergartenMaster/kgHomeNew"
									});
									localStorage.RoleType=3;
									if(response.data.Meta.KindergartenName){
										localStorage.KindergartenName = response.data.Meta.KindergartenName;
										localStorage.KdgName = response.data.Meta.KindergartenName;
									}else {
										localStorage.KindergartenName = response.data.Meta.RealName;
										localStorage.KdgName = response.data.Meta.RealName;
									};
									localStorage.KindergartenId = response.data.Meta.ServiceUnitId;
									localStorage.LogIsLogin = false;
								}else if(response.data.Meta.RoleType == 5){
									router.push({
										path: "/agencyHome"
									});
									localStorage.RoleType= 5;
									localStorage.AgencyId = response.data.Meta.AgencyId;
								}else if(response.data.Meta.RoleType == 6){
									router.push({
										path: "/allianceMain/allianceMaster/allianceHome"
									});
									localStorage.RoleType= 6;										
									localStorage.AllianceId = response.data.Meta.AllianceId;									
								}else if(response.data.Meta.RoleType == 8){
									router.push({
										path: "/proxyHome"
									});							
									localStorage.RoleType= 8;
									localStorage.ProxyId = response.data.Meta.ProxyId;
								}							
							},
							response => {
								this.passMessage = "用户名或密码错误";
								this.isLogin = false;
							}
						)
					);
				}
			}
		},
		mounted() {	
			let apiRoot=window.location.host;
			let adminUser=config.apiRoot[apiRoot];
			this.loginBg=adminUser.LoginBg;		
			//process.env.？API_ROOT = 	window.location.origin;
		}
	};
</script>
<style scoped>

	.isreliable{
		background: url("/static/images/login.png") no-repeat  0px 1% ;
	}
	.ischuying{
		background: url("/static/images/login-chuying.png") no-repeat  0px 1% ;
	}
	.login-form {
		/* background: url("/static/images/login.png") no-repeat  0px 1% ; */
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		text-align: center;
	}
	
	.login-center {
		margin-top: 10rem;
		max-width: 28rem;
	}
	
	.logo-box p {
		font-size: 1.87rem;
		color: #fff;
		line-height: 4rem;
	}
	
	.login-box {
		position: absolute;
		left: 55%;
		top: 25%;
		margin-left: -12%;
		height: 19.2rem;
		background: #ffffff;
		margin: 0 auto;
		padding-top: 1rem;
		border-radius: 0.6rem;
		width: 25%;
	}
	.login-box p{
		text-align: left;
		margin-left: 2rem;
	}
	.login-box div {
		margin-top: 1.35rem;
	}
	
	.login-box img {
		width: 3rem;
		vertical-align: middle;
	}
	
	.login-box input {
		width: 65%;
		height: 3rem;
		background: #eeeeee;
		border: none;
		font-size: 1.05rem;
		vertical-align: middle;
		padding-left: 0.6rem;
		margin-left: -0.2rem;
	}
	
	.login-box span {
		color: #ba2131;
	}
	
	.login-box .error-icon {
		width: 1.1rem;
		margin-top: -0.2rem;
	}
	
	.login-box button {
		width: 80%;
		height: 3.0rem;
		background: #da2337;
		border: none;
		font-size: 1.2rem;
		color: #fff;
		margin-top: 1.25rem;
		cursor: pointer;
	}
</style>