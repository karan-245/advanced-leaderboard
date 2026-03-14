
package com.leaderboard.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.leaderboard.model.Player;
import com.leaderboard.repository.PlayerRepository;

@RestController
@RequestMapping("/players")
@CrossOrigin

public class PlayerController {

private final PlayerRepository repo;

public PlayerController(PlayerRepository repo){
this.repo = repo;
}

@GetMapping
public List<Player> leaderboard(){
return repo.findAllByOrderByScoreDesc();
}

@PostMapping
public Player addPlayer(@RequestBody Player player){
return repo.save(player);
}

@DeleteMapping("/{id}")
public void deletePlayer(@PathVariable Long id){
repo.deleteById(id);
}

}
