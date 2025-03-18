package org.oslomet.data1700springregister.POJO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;


public class Item {
    public int itemNumber; //incrementing
    public String nameOfItem;
    public int numberOfItems;
    public String description;
    public String timeStamp; //well have some fun with this one
    public String userCreated;

    public Item(int itemNumber, String nameOfItem, int numberOfItems,String description,  String userCreated) {
        this.itemNumber = itemNumber;
        this.nameOfItem = nameOfItem;
        this.numberOfItems = numberOfItems;
        this.description = description;
       this.timeStamp = LocalDateTime.now().toString();
       this.userCreated = userCreated;
    }

    public Item() { //DB needs this
    }

    public void setItemNumber(int itemNumber) {
        this.itemNumber = itemNumber;
    }
}
