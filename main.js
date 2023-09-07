var i = 0;
var myFrame = document.getElementById('myframe');
function showrep(){
	if (i == 0){
	myframe.src = 'http://grafana.o3.ru/d/Zx9PNH8Zk/26_proizvoditel-nost-tekushchei-smeny-out?orgId=1&var-warehouse=%D0%90%D0%9B%D0%9C%D0%90%D0%A2%D0%AB_%D0%9C%D0%A0%D0%A4%D0%A6&var-OperationName=All&var-FioName=All';

	i++;
	}
	else if (i == 1){
	myframe.src = 'http://grafana.o3.ru/goto/U0U24AzIz?orgId=1';
	i++;

	}

	else if (i == 2){
	myframe.src = 'https://grafana.o3.ru/d/WwgP6CBVk/28-processing-time-and-sla?orgId=1&var-Cluster=All&var-HubType=All&var-SortCenter=1020000310007000&var-action=All&var-article_type=All&var-threshold=20&var-mode=1&var-tracing=%7B%22dashboard%22:%20%22%2328.%20Processing%20Time%20%26%20SLA%22,%20%20%22uid%22:%22WwgP6CBVk%22,%20%22user_id%22:%200,%20%22user_login%22:%20%22%22,%20%22timefilter_from%22:%201692174004887,%20%22timefilter_to%22:%201692346804887%7D&var-event_user_login=&var-delivery_schema=All&var-is_return=All&var-is_zone_courier_give_out=All&var-is_zone_keeping=All';
	i=0;
	}


}

setInterval(showrep,60000);
