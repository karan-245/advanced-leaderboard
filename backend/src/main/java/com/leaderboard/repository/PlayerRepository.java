
package com.leaderboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.leaderboard.model.Player;
import java.util.List;

public interface PlayerRepository extends JpaRepository<Player,Long> {

List<Player> findAllByOrderByScoreDesc();

}
