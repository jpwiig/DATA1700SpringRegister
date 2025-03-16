package org.oslomet.data1700springregister.POJO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter @Setter //lombok to avoid boilerplate code
public class Item {
    public int itemNumber; //incrementing
    public String nameOfItem;
    public String description;
    public String timeStamp; //well have some fun with this one
    public String userCreated;

    public Item(int itemNumber, String nameOfItem, String description, String timeStamp) {
        this.itemNumber = itemNumber;
        this.nameOfItem = nameOfItem;
        this.description = description;
        this.timeStamp = timeStamp;
    }

    public Item() { //DB needs this
    }
}
