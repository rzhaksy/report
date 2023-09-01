var i = 0;
var myFrame = document.getElementById('myframe');
function showrep(){
	if (i == 0){
	myframe.src = 'https://asc.s.o3.ru/';

	i++;
	}
	else if (i == 1){
	myframe.src = 'https://l.o3.ru/t/XZoMLd';
	i++;

	}

	else if (i == 2){
	myframe.src = 'https://login.t.o3.ru/login?callback=https%3A%2F%2Fwms-frontend-supply.t.o3.ru%2Fsupply-family%2F6256426%3Fsupply%3D2000000075175';
	i++;
	}
	else if (i == 3){
	myframe.src = 'https://grafana.o3.ru/d/WwgP6CBVk/28-processing-time-and-sla?orgId=1&var-Cluster=%D0%9A%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D1%80%20%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD&var-HubType=All&var-SortCenter=1020000310007000&var-action=All&var-article_type=All&var-threshold=20&var-mode=1&var-tracing=%7B%22dashboard%22:%20%22%2328.%20Processing%20Time%20%26%20SLA%22,%20%20%22uid%22:%22WwgP6CBVk%22,%20%22user_id%22:%200,%20%22user_login%22:%20%22%22,%20%22timefilter_from%22:%201692174004887,%20%22timefilter_to%22:%201692346804887%7D&var-event_user_login=&var-delivery_schema=All&var-is_return=All&var-is_zone_courier_give_out=All&var-is_zone_keeping=All&from=now-24h&to=now';
	
	i=0;
	}

}

setInterval(showrep,6000);
