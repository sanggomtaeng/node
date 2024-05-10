function customerList() {
    fetch("http://localhost:3000/customer")
        .then(result => result.json())
        .then(result => {
            for(customer of result){
                const newTag = 
                `<tr>
                    <td class="text-center">${customer.id}</td>
                    <td class="text-center">${customer.name}</td>
                    <td class="text-center">${customer.email}</td>
                    <td class="text-center">${customer.phone}</td>
                    <td class="text-center">${customer.address}</td>
                    <td class="text-center">
                        <button class="btnUpd">조회</button>
                        <button class="btnDel">삭제</button>
                    </td>
                </tr>`;
                list.insertAdjacentHTML("beforeend", newTag);
            }
        })
}
customerList();