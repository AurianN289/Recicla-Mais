package br.com.reciclamais.Cartaz.service;

import br.com.reciclamais.Cartaz.entity.Cartaz;
import br.com.reciclamais.Cartaz.repository.CartazRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartazService implements CartazIService {

    @Autowired
    private CartazRepository cartazRepository;

    public CartazService(CartazRepository cartazRepository) {
        this.cartazRepository = cartazRepository;
    }

    @Override
    public void save(Cartaz cartaz) throws RuntimeException {
        if (cartaz == null) {
            throw new RuntimeException("dados vazios");
        } else if (cartaz.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            cartazRepository.save(cartaz);
        }
    }

    @Override
    public List<Cartaz> findAll() throws RuntimeException {
        return cartazRepository.findAll();
    }
}
