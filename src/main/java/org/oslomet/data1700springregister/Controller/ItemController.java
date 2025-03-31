package org.oslomet.data1700springregister.Controller;

import jakarta.annotation.PostConstruct;
import org.oslomet.data1700springregister.POJO.Item;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/items") //every call to api needs to start with this
public class ItemController {

    //List with all the Items


    @GetMapping("/hello")
    public String helloItems() {
        return "hello from the Items API, that was easy!";
    }

    // A method just to load sample items:
  @PostConstruct //to load sampledata
    public void loadItems() {
        Item item1 = new Item(1, "fishsauce",81, "sauce from fish","me");
        Item item2 = new Item(2, "Lighter fluid",33, "fluid for my favorit green lighter","me");
        System.out.println("All items added!");
    }

    //to display all the items
    @GetMapping("/getItems")
    public List<Item> AllItems() {
    return;
    }
    //add a new item
    @PostMapping("/addItems")
    public void addAnItem(@RequestBody Item item){
        System.out.println(item.nameOfItem);
        //here we vill add the final thing

    }

    //to delete all Items
    @DeleteMapping("/deleteAll")
    public void deleteAll(){

    }
    //this one will one be coded live
    @DeleteMapping("/deleteOneItem")
    public void deleteOneItem(@RequestBody Item item){

    }

    //helping functions to increment
    public int incrementing(){
        return AllItems.size() + 1;
    }
}
