var i = 0;
var myFrame = document.getElementById('myframe');
function showrep(){
	if (i == 0){
	myframe.src = 'https://asc.s.o3.ru/';

	i++;
	}
	else if (i == 1){
	myframe.src = 'https://grafana.o3.ru/d-solo/fjVlUU04z/late-shipment?orgId=1&refresh=5m&var-flow_type=transit&var-warehouse=%D0%90%D0%9B%D0%9C%D0%90%D0%A2%D0%AB_%D0%9C%D0%A0%D0%A4%D0%A6&var-name_groupped_1=%D0%9D%D0%B5+%D0%B2%D1%8B%D1%87%D0%B8%D1%82%D0%B0%D0%BD%D1%8B+%D0%B8%D0%B7+%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B8%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B3%D1%80%D1%83%D0%B7%D0%B0&var-is_well_read_link=%D0%9D%D0%B5+%D0%B2%D1%8B%D1%87%D0%B8%D1%82%D0%B0%D0%BB%D0%B8+%D0%B8%D0%B7+%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B8%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%B0&var-transit_type_link=%D0%A1+%D0%B2%D1%8B%D1%87%D0%B8%D1%82%D0%BA%D0%BE%D0%B9&var-ls_total_postings=169753&var-hours=6&var-minutes=360&from=1693718521347&to=1693740121347&panelId=51';
	i++;

	}

	else if (i == 2){
	myframe.src = 'https://login.t.o3.ru/login?callback=https%3A%2F%2Fwms-frontend-supply.t.o3.ru%2Fsupply-family%2F6256426%3Fsupply%3D2000000075175';
	i++;
	}
	else if (i == 3){
	myframe.src = 'https://grafana.o3.ru/d-solo/fjVlUU04z/late-shipment?orgId=1&refresh=5m&var-flow_type=transit&var-warehouse=%D0%90%D0%9B%D0%9C%D0%90%D0%A2%D0%AB_%D0%9C%D0%A0%D0%A4%D0%A6&var-name_groupped_1=%D0%9D%D0%B5+%D0%B2%D1%8B%D1%87%D0%B8%D1%82%D0%B0%D0%BD%D1%8B+%D0%B8%D0%B7+%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B8%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B3%D1%80%D1%83%D0%B7%D0%B0&var-is_well_read_link=%D0%9D%D0%B5+%D0%B2%D1%8B%D1%87%D0%B8%D1%82%D0%B0%D0%BB%D0%B8+%D0%B8%D0%B7+%D1%82%D1%80%D0%B0%D0%BD%D0%B7%D0%B8%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%B0&var-transit_type_link=%D0%A1+%D0%B2%D1%8B%D1%87%D0%B8%D1%82%D0%BA%D0%BE%D0%B9&var-ls_total_postings=169753&var-hours=6&var-minutes=360&from=1693718521347&to=1693740121347&panelId=51';
	
	i=0;
	}

}

setInterval(showrep,60000);
