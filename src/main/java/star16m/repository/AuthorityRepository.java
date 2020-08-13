package star16m.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import star16m.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
