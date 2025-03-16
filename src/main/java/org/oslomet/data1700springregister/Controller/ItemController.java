package org.oslomet.data1700springregister.Controller;

import org.oslomet.data1700springregister.POJO.Item;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/items") //every call to api needs to start with this
public class ItemController {

    //List with items as DB for now ;)
    public List<Item> AllItems = new ArrayList<>();

    @GetMapping("/hello")
    public String helloItems() {
        return "hello from the Items API, that was easy!";
    }

    // A method just to load sample items:
    @GetMapping("/loadSampleItems")
    public void loadItems() {
        AllItems.add(new Item(1, "fishsauce","81", "sauce from fish", "2011-12-12"));
        AllItems.add(new Item(2, "Lighter fluid","33", "fluid for my favorit green lighter", "2025-13-10"));
        System.out.println("All items added!");
    }

    @GetMapping("/getItems")
    public List<Item> AllItems() {
        return AllItems;
    }
    @PostMapping("/addItem")
    public void addAnItem(@RequestBody Item item){
        System.out.println(item.nameOfItem);
        item.setItemNumber(incrementing());
        AllItems.add(item);
        System.out.println("Item added!");
        //here we vill add the final thing

    }
    //helping functions
    public int incrementing(){
        return AllItems.size() + 1;
    }
}
